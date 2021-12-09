import Constants from "expo-constants";
import { AdMobRewarded, AdMobInterstitial } from "expo-ads-admob";

const rewardedAd = {
	test_id: "ca-app-pub-3940256099942544/5224354917",
	production_id: "ca-app-pub-5209300579956450/6311065435",
};

const interstitialAd = {
	test_id: "ca-app-pub-3940256099942544/1033173712",
	production_id: "ca-app-pub-5209300579956450/6311065435",
};

export const adUnitID = ({ test_id, production_id }) => {
	return Constants.isDevice && !__DEV__ ? production_id : test_id;
};

export const playRewardedAd = async () => {
	try {
		await AdMobRewarded.setAdUnitID(adUnitID(rewardedAd));
		await AdMobRewarded.requestAdAsync();
		await AdMobRewarded.showAdAsync();
	} catch (err) {
		console.log(err);
	}
};

export const playInterstitialAd = async () => {
	try {
		await AdMobInterstitial.setAdUnitID(adUnitID(interstitialAd));
		await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
		await AdMobInterstitial.showAdAsync();
	} catch (err) {
		console.log(err);
	}
};
