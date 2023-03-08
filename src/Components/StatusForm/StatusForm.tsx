export const StatusForm = () => {
  return (
    <>
      <form>
        <label>
          TTN number
          <input type="text" placeholder="59000509805747" />
        </label>
        <button type="submit">Get status TTN</button>
      </form>
    </>
  );
};
