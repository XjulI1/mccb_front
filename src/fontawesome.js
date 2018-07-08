import {library} from '@fortawesome/fontawesome-svg-core'
import {faExchangeAlt, faPlus, faMoneyBillAlt, faCogs, faList, faSearch, faChartPie} from '@fortawesome/free-solid-svg-icons'

export default {
  load: () => {
    library.add({
      faExchangeAlt,
      faPlus,
      faMoneyBillAlt,
      faCogs,
      faList,
      faSearch,
      faChartPie
    })
  }
}
