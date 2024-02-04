import styles from "../../styles/Dashboard.module.css";

export default function LeaderBoardTable() {
  return (
    <div>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className={`${styles.skyBlueBg} text-white text-lg font-semibold`}>
      <tr>
        <th>Ranking</th>
        <th>Name</th>
        <th>Marks</th>
      </tr>
    </thead>
    <tbody className={`${styles.skyBlueBg} text-lg font-semibold`}>
      <tr className="bg-base-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  );
}
