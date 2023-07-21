import React from 'react';

const SummaryPage = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div>
      <form action="">
        <input
          type="checkbox"
          id="confirm-checkbox"
          checked={checked}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setChecked(e.target.checked)
          }
        />
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        <button type="submit" disabled={!checked}>
          주문 확인
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
