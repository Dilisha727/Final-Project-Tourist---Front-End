import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


const PopupModal = ({ show, handleClose }) => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [budget, setBudget] = useState(18);

  // Date range state
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  const handleDateRangeChange = (ranges) => {
    const { selection } = ranges;
    setDateRange([selection]);
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Plan Your Dream Trip</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-layout">
        <div className="left-content">
          {/* Travel Dates: DateRangePicker */}
          <h5>Start date ➔ End date</h5>
          <DateRangePicker
            ranges={dateRange}
            onChange={handleDateRangeChange}
            moveRangeOnFirstSelection={false}
            months={2}
            direction="horizontal"
            rangeColors={['#3d91ff']}
            showDateDisplay={true}
            dateDisplayFormat="MMM d, yyyy"
          />
          {/* Add more form fields like time, flexibility checkbox */}
          <Form.Group className="mt-3">
            <Form.Label>Select start time</Form.Label>
            <Form.Control type="time" />
          </Form.Group>
          <Form.Check className="mt-2" label="I am flexible 1-2 days" />

          {/* Budget Range */}
          <h5 className="mt-4">Budget Range</h5>
          <div className="d-flex align-items-center">
            <Form.Control
              type="range"
              min="18"
              max="5000"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="me-2"
            />
            <span>${budget}</span>
          </div>

          {/* Travel Companions */}
          <h5 className="mt-4">Travel Companions</h5>
          <div className="d-flex align-items-center mb-2">
            <Form.Label className="me-2">Adults:</Form.Label>
            <Button onClick={() => setAdults(Math.max(1, adults - 1))}>-</Button>
            <span className="mx-2">{adults}</span>
            <Button onClick={() => setAdults(adults + 1)}>+</Button>
          </div>
          <div className="d-flex align-items-center mb-2">
            <Form.Label className="me-2">Children:</Form.Label>
            <Button onClick={() => setChildren(Math.max(0, children - 1))}>-</Button>
            <span className="mx-2">{children}</span>
            <Button onClick={() => setChildren(children + 1)}>+</Button>
          </div>

          {/* Flight Preferences */}
          <h5>Flight Preferences</h5>
          <Form.Group className="mb-3">
            <Form.Label>Flight Class:</Form.Label>
            <Form.Select>
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Flight Type:</Form.Label>
            <Form.Select>
              <option>Direct flight only</option>
              <option>Layovers allowed</option>
            </Form.Select>
          </Form.Group>
        </div>

        {/* Add Robot Image */}
        <div className="right-content">
          <img src="./img/2.png" alt="Robot" className="robot-image" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Back
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupModal;
