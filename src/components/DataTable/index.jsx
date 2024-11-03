// import styles from "./styles.module.css";
import scssTable from './table.module.scss';

// Component =======================================================//

const DataTable = () => {
  return (
    <section className={scssTable.dataSet}>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default DataTable;
// Export component ===============================================//
