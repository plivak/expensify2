import React from 'react';

export default class ExpenseForm extends React.Component {
  render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Current Salary"
                        autoFocus
                    />
                    <p>
                    <input 
                    type="text"
                    placeholder="Personal Retirement Accounts"
                    autoFocus
                    />
                    </p>
                    <p>
                    <input 
                    type="text"
                    placeholder="Work Retirement Accounts"
                    autoFocus
                    />
                    </p>
                    <p>
                    <input 
                    type="text"
                    placeholder="Emergency Savings"
                    autoFocus
                    />
                    </p>
                    <p>
                    <input 
                    type="text"
                    placeholder="Housing"
                    autoFocus
                    />
                    </p>
                    <p className="disclaimer">I agree to the RAC Terms & Conditions and Privacy Policy.  I give RAC authorization to access a soft credit report to assist in personalizing my account and recommendations</p>

                </form>
            </div>
        )
  }
}

