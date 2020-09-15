const initialState = {
    title: 'LOL Seasonal Tournament',
    date: {
        month: 'APR',
        day: 19
    },
    time: '12:00 PM',
    location: 'North America'
};

const globalReducer = (state = initialState, actions) => {
    switch(actions.type) {
        default: return state;
    }
}

export default globalReducer;

