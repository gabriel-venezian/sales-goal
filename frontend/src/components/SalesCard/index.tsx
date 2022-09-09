import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
  return (
    <>
      <div className="sg-card">
        <h2 className="sg-card-title">Vendas</h2>
        <div className="sg-card-form-control-container">
          <input className="sg-card-form-control" type="text" />
        </div>
        <div className="sg-card-form-control-container">
          <input className="sg-card-form-control" type="text" />
        </div>
        <div>
          <table className="sg-card-sales-table">
            <thead>
              <tr>
                <th className="show992">ID</th>
                <th className="show576">Date</th>
                <th>Seller</th>
                <th className="show992">Visits</th>
                <th className="show992">Sales</th>
                <th>Total</th>
                <th>Notify</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="show992">#341</td>
                <td className="show576">2022/06/28</td>
                <td>Anakin</td>
                <td className="show992">15</td>
                <td className="show992">11</td>
                <td>U$ 5.300,00</td>
                <td>
                  <NotificationButton />
                </td>
              </tr>
              <tr>
                <td className="show992">#342</td>
                <td className="show576">2022/06/27</td>
                <td>Anakin</td>
                <td className="show992">10</td>
                <td className="show992">09</td>
                <td>U$ 4.900,00</td>
                <td>
                  <NotificationButton />
                </td>
              </tr>
              <tr>
                <td className="show992">#343</td>
                <td className="show576">2022/06/26</td>
                <td>Anakin</td>
                <td className="show992">18</td>
                <td className="show992">15</td>
                <td>U$ 7.600,00</td>
                <td>
                  <NotificationButton />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default SalesCard
