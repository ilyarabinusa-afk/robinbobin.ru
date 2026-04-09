<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input || empty($input['name']) || empty($input['phone']) || empty($input['items'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$botToken = '8212507941:AAHlJx98g697MbJ0x4CnNQseMIZZeLOUVA8';
$chatId = '183921686';

// Format order message
$items = $input['items'];
$lines = [];
foreach ($items as $item) {
    $sum = $item['price'] * $item['qty'];
    $lines[] = "{$item['name']} x{$item['qty']} — {$sum}₽";
}
$orderText = implode("\n", $lines);
$total = $input['total'] ?? 0;

$message = "🍔 Новый заказ с сайта!\n\n"
    . $orderText . "\n\n"
    . "💰 Итого: {$total}₽\n"
    . "👤 {$input['name']}\n"
    . "📞 {$input['phone']}\n"
    . "📍 {$input['location']}";

// Send to Telegram
$url = "https://api.telegram.org/bot{$botToken}/sendMessage";
$data = [
    'chat_id' => $chatId,
    'text' => $message,
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
$result = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Send email
$to = 'order@robinbobin.ru';
$subject = "Новый заказ — {$input['name']} ({$total}₽)";
$headers = "From: noreply@robinbobin.ru\r\nContent-Type: text/plain; charset=utf-8";
@mail($to, $subject, $message, $headers);

if ($httpCode === 200) {
    echo json_encode(['success' => true]);
} else {
    // Even if Telegram fails, email was sent
    echo json_encode(['success' => true, 'telegram' => false]);
}
