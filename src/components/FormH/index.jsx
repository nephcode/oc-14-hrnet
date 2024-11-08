// Import Module ===================================================//
import { corlog, showPopover } from '../../utils/tools';
//import { useState } from 'react';
//import { saveData } from '../../utils/db';
// Import Data =====================================================//
import mockData from './states.json';
import mockDept from './department.json';
// import Style ====================================================//
import scssFormh from './formh.module.scss';
//import scssForm from '../../scss/form.module.scss';
// Component =======================================================//
import Modal from 'styxdust';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setEmployeeField,
  clearEmployee,
  addEmployee,
} from '../../app/UserSlice';

const FormEmployee = ({ db }) => {
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false);
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.user);

  const handleInputChange = (field, value) => {
    dispatch(setEmployeeField({ field, value }));
  };

  console.log('db prop:', db); // vérifier que la prop db est bien reçue
  // Je place ici la classique verif de l'envoi du formulaire
  const handleSubmit = async (eventForm) => {
    eventForm.preventDefault(); // bloque le GET
    const form = eventForm.target; // cible le formulaire
    const formData = new FormData(form); // récupère les données du formulaire
    const data = Object.fromEntries(formData.entries());
    console.table(data); // affiche les données dans la console
    await db(data); //  inscrire dans la base de données
    // showPopover('Formulaire soumis avec succès !');

    // Afficher le message de succès
    setModalIsDisplayed(true);

    dispatch(addEmployee(employee));

    dispatch(clearEmployee()); // Réinitialise le formulaire après enregistrement
  }; //C'est du classique Vanilla JS (on connait)

  return (
    <section id="formh" className={scssFormh.formh}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Employee</legend>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
          />
          <label htmlFor="dateBirth">Date of Birth</label>
          <input
            type="date"
            id="dateBirth"
            name="dateBirth"
            value={employee.dateOfBirth}
            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
          />
          <label htmlFor="startMission">Start Date Mission</label>
          <input
            type="date"
            id="startMission"
            name="startMission"
            value={employee.startDate}
            onChange={(e) => handleInputChange('startDate', e.target.value)}
          />

          <fieldset>
            <legend>Adresse</legend>
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              value={employee.street}
              onChange={(e) => handleInputChange('street', e.target.value)}
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={employee.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
            />
            <label htmlFor="location">State</label>
            <select
              name="location"
              value={employee.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
            >
              {mockData.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
            <label htmlFor="zipcode">Zip Code</label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              value={employee.zipCode}
              onChange={(e) => handleInputChange('zipCode', e.target.value)}
            />
          </fieldset>
          <label htmlFor="department">Department</label>
          <select
            name="department"
            value={employee.department}
            onChange={(e) => handleInputChange('department', e.target.value)}
          >
            {mockDept.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
          <button>Save</button>
        </fieldset>
      </form>
      <Modal
        onSubmit={handleSubmit}
        isDisplayed={modalIsDisplayed}
        onCloseModal={() => setModalIsDisplayed(false)}
        content={
          <div id="confirmation" className="modal">
            <p className={scssFormh.modalText}>Employé.e créé avec succès !</p>
            <p className={scssFormh.modalSubtext}>
              Cliquez sur la croix pour fermer.
            </p>
          </div>
        }
      />
    </section>
  );
};
export default FormEmployee;
// Export component ===============================================//
