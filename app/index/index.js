import Vue from 'Vue'
import Favlist from './components/Favlist'


new Vue({
	el: '#app',
	render: function(createElement) {
        return createElement(Favlist)
    }
})
