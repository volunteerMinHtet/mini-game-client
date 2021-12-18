import { SIGN_UP_PLAYER, SET_ROOM } from "../player/playerConstant";

import { storePlayerToLocal } from "../../utils/player";
import { navigationRef } from "../../screens/RootNavigator";

const playerMiddleware = (store) => (next) => (action) => {
	switch (action.type) {
		case SIGN_UP_PLAYER:
			{
				const data = {
					player_id: action.payload.player_id,
					player_name: action.payload.player_name,
					shown: false,
				};

				storePlayerToLocal(data)
					.then(() => {
						next(action);
					})
					.catch((e) => {});
			}
			break;

		case SET_ROOM:
			{
				if (action.payload.room_id) {
					next(action);

					navigationRef.navigate("Home/Lobby", {
						message: action.payload.room_id,
					});
				}
			}
			break;

		default:
			return next(action);
	}
};

export default playerMiddleware;
