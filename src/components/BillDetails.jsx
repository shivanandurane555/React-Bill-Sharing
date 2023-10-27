const BillDetails = ({ friend }) => {
  return (
    <div>
      <div>
        <h3>Bill Details that should be given by {friend.name}</h3>
        <ul>
          {friend.billDetails.map((bill) => (
            <li key={bill.friendId}>
              You need to pay {bill.price} to {bill.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BillDetails;
