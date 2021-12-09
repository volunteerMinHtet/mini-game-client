import { SIGN_UP_PLAYER } from "../player/playerConstant";

import { storePlayerToLocal } from "../../utils/playerUtils";
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

		default:
			return next(action);
	}
};

export default playerMiddleware;
