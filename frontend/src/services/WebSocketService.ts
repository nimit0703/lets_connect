// // import SockJS from 'sockjs-client';
// // import Stomp from 'stompjs';

// // import SockJS from 'sockjs-client/dist/sockjs'; // Note the explicit path to sockjs

// // // Rest of the code

// // export class WebSocketService {
// //   private stompClient: Stomp.Client;

// //   constructor() {
// //     const socket = new SockJS('http://localhost:8080/ws');
// //     this.stompClient = Stomp.over(socket);
// //     this.stompClient.connect({}, () => {
// //       console.log('WebSocket connected');
// //     });
// //   }

// //   sendMessage(destination: string, message: Message) {
// //     this.stompClient.send(destination, {}, JSON.stringify(message));
// //   }

// //   subscribe(destination: string, callback: (message: Message) => void) {
// //     this.stompClient.subscribe(destination, (response) => {
// //       const message: Message = JSON.parse(response.body);
// //       callback(message);
// //     });
// //   }
// }
