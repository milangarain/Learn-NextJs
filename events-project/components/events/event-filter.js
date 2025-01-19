const EventFilter = () => {
  return (
    <form className="event-filter" onSubmit={() => {}}>
      <div>
        <label htmlFor="year">Year</label>
        <input
          id="year"
          name="year"
          type="number"
          max="2025"
          min="2015"
          placeholder="Please enter event year"
        />
      </div>
      <div>
        <label htmlFor="month">Month</label>
        <input
          id="month"
          name="month"
          type="number"
          max="12"
          min="1"
          placeholder="Please enter event year"
        />
      </div>
      <button type="submit">Find Events</button>
    </form>
  );
};

export default EventFilter;
