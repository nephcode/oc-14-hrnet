// Import Module ==================================================//
import scssFormh from './formh.module.scss';
import states from './states.json';

// Component ======================================================//
const FormEmployee = () => {
  return (
    <section className={scssFormh.formh}>
      <form>
        <fieldset>
          <label htmlFor="firstName">Nom</label>
          <input type="text" id="firstName" name="firstName" />
          <label htmlFor="lastName"></label>
          <input type="text" id="lastName" name="lastName" />
          <label htmlFor="dateBirth">Date of Birth</label>
          <input type="date" id="dateBirth" name="dateBirth" />
          <label htmlFor="startMission">Start Date Mission</label>
          <input type="date" id="startMission" name="startMission" />

          <label htmlFor="location">Choisir un lieu</label>
          <select className={scssFormh.formh}>
            {states.map((state) => (
              <option key={state.abbreviation} id={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
        </fieldset>
      </form>
    </section>
  );
};
export default FormEmployee;
// Export component ===============================================//
