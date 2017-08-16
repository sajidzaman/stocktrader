import {HTTP} from '../http-common';
export const loadData = ({commit}) => {
    HTTP.get('data.json')
        .then(response => {
            console.log(response.data);
            if(response.data){
                const stocks = response.data.stocks;
                const funds = response.data.funds;
                const stockPortfolio = response.data.stockPortfolio;

                const portfolio = {
                    stockPortfolio,
                    funds
                };

                commit('SET_STOCKS', stocks);
                commit('SET_PORTFOLIO', portfolio);
            }
        })
}