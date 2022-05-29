const Table = ({ headers, dataFields, data, className = '' }) => (
  <table className={`table-auto w-full ${className}`}>
    <thead className="bg-black text-white">
    <tr>
      {
        headers.map((header, index) => <th key={index} className="text-left px-5 py-2">{header}</th>)
      }
    </tr>
    </thead>
    <tbody>
    {
      data.map((team, index) =>
        <tr key={index} className="border-b last:border-none">
          {
            dataFields.map((field, index) =>
              <td key={index} className="px-5 py-2">{team[field]}</td>
            )
          }
        </tr>
      )
    }
    </tbody>
  </table>
);

export default Table;