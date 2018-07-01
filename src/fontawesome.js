import {library} from '@fortawesome/fontawesome-svg-core'
import {faExchangeAlt, faPlus, faMoneyBillAlt, faCogs, faList} from '@fortawesome/free-solid-svg-icons'

export default {
  load: function () {
    library.add({
      faExchangeAlt,
      faPlus,
      faMoneyBillAlt,
      faCogs,
      faList
    })
  }
}
