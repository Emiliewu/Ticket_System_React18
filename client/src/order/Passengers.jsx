import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import './Passengers.css';

const Passenger = memo(function Passenger(props) {
    const {
        id,
        name,
        followAdultName,
        ticketType,
        licenceNo,
        gender,
        birthday,
        onRemove,
        onUpdate,
        showGenderMenu,
        showFollowAdultMenu,
        showTicketTypeMenu,
    } = props;

    const isAdult = ticketType === 'adult';

    return (
        <li className="passenger">
            <i className="delete" onClick={() => onRemove(id)}>
                —
            </i>
            <ol className="items">
                <li className="item">
                    <label className="label name">姓名</label>
                    <input
                        type="text"
                        className="input name"
                        placeholder="Full Name"
                        value={name}
                        onChange={e => onUpdate(id, { name: e.target.value })}
                    />
                    <label
                        className="ticket-type"
                        onClick={() => showTicketTypeMenu(id)}
                    >
                        {isAdult ? 'Adult' : 'Child'}
                    </label>
                </li>
                {isAdult && (
                    <li className="item">
                        <label className="label licenceNo">ID</label>
                        <input
                            type="text"
                            className="input licenceNo"
                            placeholder="ID"
                            value={licenceNo}
                            onChange={e =>
                                onUpdate(id, { licenceNo: e.target.value })
                            }
                        />
                    </li>
                )}
                {!isAdult && (
                    <li className="item arrow">
                        <label className="label gender">Gender</label>
                        <input
                            type="text"
                            className="input gender"
                            placeholder="Please select"
                            onClick={() => showGenderMenu(id)}
                            value={
                                gender === 'male'
                                    ? 'Male'
                                    : gender === 'female'
                                    ? 'Female'
                                    : 'NA'
                            }
                            readOnly
                        />
                    </li>
                )}
                {!isAdult && (
                    <li className="item">
                        <label className="label birthday">Date of Birth</label>
                        <input
                            type="text"
                            className="input birthday"
                            placeholder="e.g. 19951015"
                            value={birthday}
                            onChange={e =>
                                onUpdate(id, { birthday: e.target.value })
                            }
                        />
                    </li>
                )}
                {!isAdult && (
                    <li className="item arrow">
                        <label className="label followAdult">Audlt accompanied</label>
                        <input
                            type="text"
                            className="input followAdult"
                            placeholder="Please select"
                            value={followAdultName}
                            onClick={() => showFollowAdultMenu(id)}
                            readOnly
                        />
                    </li>
                )}
            </ol>
        </li>
    );
});

Passenger.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    followAdult: PropTypes.number,
    followAdultName: PropTypes.string,
    ticketType: PropTypes.string.isRequired,
    licenceNo: PropTypes.string,
    gender: PropTypes.string,
    birthday: PropTypes.string,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    showGenderMenu: PropTypes.func.isRequired,
    showFollowAdultMenu: PropTypes.func.isRequired,
    showTicketTypeMenu: PropTypes.func.isRequired,
};

const Passengers = memo(function Passengers(props) {
    const {
        passengers,
        createAdult,
        createChild,
        removePassenger,
        updatePassenger,
        showGenderMenu,
        showFollowAdultMenu,
        showTicketTypeMenu,
    } = props;

    const nameMap = useMemo(() => {
        const ret = {};

        for (const passenger of passengers) {
            ret[passenger.id] = passenger.name;
        }

        return ret;
    }, [passengers]);

    return (
        <div className="passengers">
            <ul>
                {passengers.map(passenger => {
                    return (
                        <Passenger
                            {...passenger}
                            followAdultName={nameMap[passenger.followAdult]}
                            showTicketTypeMenu={showTicketTypeMenu}
                            showGenderMenu={showGenderMenu}
                            showFollowAdultMenu={showFollowAdultMenu}
                            onRemove={removePassenger}
                            onUpdate={updatePassenger}
                            key={passenger.id}
                        />
                    );
                })}
            </ul>
            <section className="add">
                <div className="adult" onClick={() => createAdult()}>
                    Add passenger
                </div>
                <div className="child" onClick={() => createChild()}>
                    Add child
                </div>
            </section>
        </div>
    );
});

Passengers.propTypes = {
    passengers: PropTypes.array.isRequired,
    createAdult: PropTypes.func.isRequired,
    createChild: PropTypes.func.isRequired,
    showGenderMenu: PropTypes.func.isRequired,
    showFollowAdultMenu: PropTypes.func.isRequired,
    showTicketTypeMenu: PropTypes.func.isRequired,
};

export default Passengers;
