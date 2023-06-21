import { useState } from "react";

const FineCalculator = () => {

    // hooks
    const [daysLate, setDaysLate] = useState('');
    const [bookType, setBookType] = useState('normal');
    const [additionalInfo, setAdditionalInfo] = useState([]);
    const [libraryBranch, setLibraryBranch] = useState('yishun');
    const [submitted, setSubmitted] = useState(false);
    const [daysLateValid, setDaysLateValid] = useState('');

    const calculateFine = () => {
        let fine = parseInt(daysLate) * 1; // Base fine is $1 per day

        if (bookType === 'reference') {
            fine *= 2; // Double the fine for reference books
        }

        if (additionalInfo.includes('missingPages')) {
            fine += 10; // Additional $10 fine for missing pages
        }

        if (additionalInfo.includes('damagedCover')) {
            fine += 20; // Additional $20 fine for damaged cover
        }

        if (additionalInfo.includes('moreThan30Days')) {
            fine += 30; // Additional $30 fine for more than 30 days late
        }

        alert(`Total fine due: $${fine.toFixed(2)}`);
    };

    const handleCheckboxChange = (event) => {
        const { checked, value } = event.target;
        setAdditionalInfo((prevAdditionalInfo) => {
            if (checked) {
                return [...prevAdditionalInfo, value];
            } else {
                return prevAdditionalInfo.filter((info) => info !== value);
            }
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);

        // Validate days late input
        if (!daysLate || parseInt(daysLate) < 1) {
            setDaysLateValid(false);
        } else {
            setDaysLateValid(true);
            calculateFine();
        }
    };

    return (
        <form method="POST" onSubmit={handleSubmit}>
            <div className="container mt-5">
                <h2 className="mb-4">Fine Calculator</h2>

                <div className="form-group">
                    <label htmlFor="daysLate">Days late:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="daysLate"
                        value={daysLate}
                        onChange={(e) => setDaysLate(e.target.value)}
                    />
                    {!daysLateValid && submitted &&
                        <div className="invalid-feedback" style={{display:"block"}}>Please enter a valid number of days late.</div>
                    }
                </div>

                <div className="form-group">
                    <label>Type of Book:</label>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            id="normal"
                            name="bookType"
                            value="normal"
                            checked={bookType === 'normal'}
                            onChange={(e) => setBookType(e.target.value)}
                        />
                        <label htmlFor="normal" className="form-check-label">
                            Normal
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            id="reference"
                            name="bookType"
                            value="reference"
                            checked={bookType === 'reference'}
                            onChange={(e) => setBookType(e.target.value)}
                        />
                        <label htmlFor="reference" className="form-check-label">
                            Reference
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Additional Info:</label>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="missingPages"
                            value="missingPages"
                            checked={additionalInfo.includes('missingPages')}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="missingPages" className="form-check-label">
                            Missing Pages (+$10)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="damagedCover"
                            value="damagedCover"
                            checked={additionalInfo.includes('damagedCover')}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="damagedCover" className="form-check-label">
                            Damaged Cover (+$20)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="moreThan30Days"
                            value="moreThan30Days"
                            checked={additionalInfo.includes('moreThan30Days')}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="moreThan30Days" className="form-check-label">
                            More than 30 Days Late (+$30)
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Library Branch:</label>
                    <select
                        className="form-control"
                        name="branch"
                        value={libraryBranch}
                        onChange={(e) => setLibraryBranch(e.target.value)}
                    >
                        <option value="yishun">Yishun</option>
                        <option value="amk">Ang Mio Ko</option>
                        <option value="somerset">Somerset</option>
                    </select>
                </div>

                <button className="btn btn-primary" type="submit">Calculate Fine</button>
            </div>
        </form>
    )
};

export default FineCalculator;