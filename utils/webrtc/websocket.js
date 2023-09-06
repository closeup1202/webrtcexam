var conn = new WebSocket('ws://localhost:8080/socket');

conn.onopen = () => conn.send("connected");
conn.onclose = () => console.log("socket cloesd");

export { conn }