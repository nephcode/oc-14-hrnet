// Import Module ===================================================//
//import { useState } from 'react';
import { saveData } from '../../utils/db';
// Import Data =====================================================//
import mockData from './states.json';
import mockDept from './department.json';
// import Style ====================================================//
import scssFormh from './formh.module.scss';
//import scssForm from '../../scss/form.module.scss';
// Component =======================================================//
const FormEmployee = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    await saveData(data);
  };

  return (
    <section id="formh" className={scssFormh.formh}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Employee</legend>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" />
          <label htmlFor="lastName">Last Name</label>
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
            <select name="location">
              {mockData.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
            <label htmlFor="zipcode">Zip Code</label>
            <input type="text" id="zipcode" name="zipcode" />
          </fieldset>
          <label htmlFor="department">Department</label>
          <select name="department">
            {mockDept.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
          <button type="submit">Save</button>
        </fieldset>
      </form>
    </section>
  );
};
export default FormEmployee;
// Export component ===============================================//
