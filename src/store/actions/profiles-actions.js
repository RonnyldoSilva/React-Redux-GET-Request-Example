
export const SAVE_PROFILE = 'SAVE_PROFILE';
export const saveProfile = (profile) => {
    console.log(profile);
    return {
        type: SAVE_PROFILE,
        payload: {
            profile: profile
        }
    }
};