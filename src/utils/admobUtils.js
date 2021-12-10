import React from "react";
import { Platform } from "react-native";
import Constants from "expo-constants";
import { AdMobRewarded, AdMobInterstitial, AdMobBanner } from "expo-ads-admob";

const rewardedAd = {
	android: {
		test_id: "ca-app-pub-3940256099942544/5224354917",
		production_id: "aaaaa",
	},
	ios: {
		test_id: "ca-app-pub-3940256099942544/1712485313",
		production_id: "aaaaa",
	},
};

const interstitialAd = {
	android: {
		test_id: "ca-app-pub-3940256099942544/1033173712",
		production_id: "aaaaa",
	},
	ios: {
		test_id: "ca-app-pub-3940256099942544/4411468910",
		production_id: "aaaaa",
	},
};

const bannerAd = {
	android: {
		test_id: "ca-app-pub-3940256099942544/6300978111",
		production_id: "aaaaa",
	},
	ios: {
		test_id: "ca-app-pub-3940256099942544/2934735716",
		production_id: "aaaaa",
	},
};

export const adUnitID = ({ android, ios }) => {
	return Constants.isDevice && !__DEV__
		? Platform.select({
				android: android.production_id,
				ios: ios.production_id,
		  })
		: Platform.select({
				android: android.test_id,
				ios: ios.test_id,
		  });
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

export const ShowBannerAd = () => {
	return (
		<AdMobBanner
			bannerSize="largeBanner"
			adUnitID={adUnitID(bannerAd)}
			servePersonalizedAds={true}
			// onDidFailToReceiveAdWithError={}
		/>
	);
};
