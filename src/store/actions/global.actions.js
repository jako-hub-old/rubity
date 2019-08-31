export const SET_LOADING = '[GLOBAL] SET_LOADING';

/*************************************
 ********   Action creators **********
 *************************************/

export const toggleLoading = (loading) => ({
    type : SET_LOADING,
    loading,
});