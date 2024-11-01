// Import Module ===================================================//

// Import Data =====================================================//
import mockData from './states.json';

// import Style ====================================================//
import scssFormh from './formh.module.scss';
//import scssForm from '../../scss/form.module.scss';
// Component =======================================================//
const FormEmployee = () => {
  return (
    <section id="formh" className={scssFormh.formh}>
      <form>
        <fieldset>
          <legend>New Employee</legend>
          <label htmlFor="firstName">Prénom</label>
          <input type="text" id="firstName" name="firstName" />
          <label htmlFor="lastName">Nom</label>
          <input type="text" id="lastName" name="lastName" />
          <label htmlFor="dateBirth">Date of Birth</label>
          <input type="date" id="dateBirth" name="dateBirth" />
          <label htmlFor="startMission">Start Date Mission</label>
          <input type="date" id="startMission" name="startMission" />

          <fieldset>
            <legend>Adresse</legend>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" name="street" />
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" />
            <label htmlFor="location">State</label>
            <select className={scssFormh.formh}>
              {mockData.map((state) => (
                <option key={state.abbreviation} id={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
          </fieldset>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </section>
  );
};
export default FormEmployee;
// Export component ===============================================//
