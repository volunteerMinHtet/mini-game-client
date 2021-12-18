import { io } from "socket.io-client";
import Constants from "expo-constants";

import { socketChannels } from "./socketChannels";

const ENDPOINT =
	Constants.isDevice && !__DEV__ ? "http://not-yet" : "http://10.0.2.2:5000";

let socket;

export const initiateSocket = (player, callback) => {
	socket = io(ENDPOINT, {
		query: { player_id: player.player_id, player_name: player.player_name },
	});

	socket.on("connect", () => {
		console.log(`Connecting socket...`);

		return callback(null, { socket_id: socket.id });
	});
};

export const createRoom = (callback) => {
	socket.emit(socketChannels.create_room);

	socket.on(socketChannels.room_created, (data) => {
		console.log(`Created Room! RoomID:${data.room_id}`);
		return callback(data);
	});
};

export const joinRoom = (roomId, callback) => {
	socket.emit(socketChannels.join_room, { room_id: roomId });

	socket.on(socketChannels.room_joined, (data) => {
		console.log(`Joined Room! RoomID:${data.room_id}`);

		return callback(null, data);
	});

	socket.on(socketChannels.rejected_room_join, (data) => {
		return callback(data.msg, null);
	});
};

export const subscribeToRoom = (callback) => {
	socket.on(socketChannels.new_player_joined_to_room, (data) => {
		return callback(null, data);
	});
};

export const subscribeToChat = (callback) => {
	socket.on(socketChannels.room_chat, (data) => {
		return callback(null, data);
	});
};

export const sendMessageToRoom = (room, message) => {
	socket.emit(socketChannels.room_chat, { room_id: room, msg: message });
};

export const disconnectSocket = () => {
	socket.disconnect();

	console.log(`Disconnected socket...`);
};
