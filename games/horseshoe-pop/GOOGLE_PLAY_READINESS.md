# Horse Shoe Pop — Google Play Readiness

Status date: September 1, 2026

The browser game is the playable prototype. It is **not yet a Google Play submission artifact**. Google Play requires a signed Android App Bundle (`.aab`) plus the policy, store-listing, testing, and quality work below.

## Product decisions

- [ ] Confirm the official publisher name, support email, website, and privacy-policy URL.
- [ ] Confirm the target audience. If children are included, follow the Families policies throughout the app and every bundled SDK.
- [ ] Decide whether launch will be ad-free. Ad-free is the safest first release for a conservation game intended for children and adults.
- [ ] Decide whether accounts, cloud saves, leaderboards, purchases, analytics, or ads will be included. Each choice changes the Data safety declaration.

## Android release build

- [ ] Package the game as a native Android project and generate a signed Android App Bundle (`.aab`). New Google Play apps must publish with an App Bundle.
- [ ] Target Android 16 / API level 36 or higher for new apps and updates submitted on or after August 31, 2026.
- [ ] Enroll in Play App Signing and protect the upload key.
- [ ] Set a unique application ID, version name, and increasing version code.
- [ ] Support Android lifecycle behavior: pause/resume, audio focus, back navigation, screen rotation policy, offline recovery, and save recovery.
- [ ] Remove permissions the game does not need. This game should not need camera, microphone, contacts, precise location, or background location.
- [ ] Test touch targets, small and large screens, tablets, notches/safe areas, low-memory recovery, offline play, and interrupted sessions.
- [ ] Run Android vitals checks for crashes, ANRs, startup, rendering, battery use, and excessive wakeups.

## Play Console declarations

- [ ] Complete the Data safety form accurately, including collection or sharing performed by every third-party SDK.
- [ ] Publish a public privacy policy and link it in Play Console and inside the app.
- [ ] Complete the content-rating questionnaire; unrated apps are not allowed.
- [ ] Declare target audience and content. Any selected age group that includes children triggers Families policy obligations.
- [ ] Declare whether the game contains ads, in-app purchases, or other commercial content.
- [ ] Provide app-access instructions if reviewers need credentials or a special path.
- [ ] If accounts are ever added, provide account deletion inside the app and through a public web page, and delete associated user data when requested.

## Children and families

- [ ] Use child-appropriate content, links, data practices, and monetization.
- [ ] If ads are shown to children or users of unknown age, use only eligible Families self-certified ads SDK versions and disable personalized advertising.
- [ ] If the game targets both children and adults and uses adult-only SDK behavior, implement a neutral age screen before those SDKs collect or transmit data.
- [ ] Verify every analytics, crash-reporting, sign-in, ads, and social SDK against the Families and User Data policies before release.

## Store listing

- [ ] Final app name, short description, full description, category, tags, contact details, and privacy-policy URL.
- [ ] High-resolution app icon, feature graphic, phone screenshots, tablet screenshots, and optional preview video that match the real game.
- [ ] Localize the store listing and the educational content in English and Spanish.
- [ ] Document permission use and provide required declarations for any restricted permissions.

## Testing and release

- [ ] Use internal testing first, then closed testing on real phones and tablets.
- [ ] If the developer account is a newly created personal account subject to the rule, maintain at least 12 continuously opted-in closed testers for 14 consecutive days before applying for production access.
- [ ] Test all 100 levels for solvability, difficulty curve, reward balance, save integrity, and accessibility.
- [ ] Add a release checklist covering clean install, upgrade, offline start, background/foreground, sound controls, purchase restoration if applicable, and privacy links.
- [ ] Submit production access answers and release notes only after tester feedback has been addressed.

## Official references

- [Target API level requirements](https://support.google.com/googleplay/android-developer/answer/11926878?hl=en)
- [Android App Bundles](https://developer.android.com/guide/app-bundle)
- [Upload an app bundle and Play App Signing](https://developer.android.com/studio/publish/upload-bundle)
- [Prepare an app for review](https://support.google.com/googleplay/android-developer/answer/9859455?hl=en)
- [Data safety](https://support.google.com/googleplay/android-developer/answer/10787469?hl=en)
- [Target audience and app content](https://support.google.com/googleplay/android-developer/answer/9867159?hl=en)
- [Families policies](https://support.google.com/googleplay/android-developer/answer/9893335?hl=en)
- [Content ratings](https://support.google.com/googleplay/android-developer/answer/9859655?hl=en)
- [Personal-account testing requirements](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en)
- [Account deletion requirements](https://support.google.com/googleplay/android-developer/answer/13327111?hl=en)
