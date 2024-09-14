document.addEventListener('DOMContentLoaded', function () {
    // Troop Deployment Form Submission
    const troopForm = document.querySelector('#troop-deployment-form');
    const troopButton = troopForm.querySelector('button[type="submit"]');
    
    if (troopForm && troopButton) {
        troopButton.addEventListener('click', function (event) {
            event.preventDefault();
            
            const unit = document.querySelector('#unit').value;
            const location = document.querySelector('#deployment-location').value;
            const date = document.querySelector('#deployment-date').value;
            const details = document.querySelector('#deployment-details').value;
            
            if (unit && location && date && details) {
                alert('Troops successfully deployed');
                troopForm.reset();
            } else {
                alert('Please fill out all fields');
            }
        });
    } else {
        console.error('Troop Deployment Form or Submit Button not found.');
    }

    // Resource Allocation Form Submission
    const resourceForm = document.querySelector('#resource-allocation-form');
    const resourceButton = resourceForm.querySelector('button[type="submit"]');
    
    if (resourceForm && resourceButton) {
        resourceButton.addEventListener('click', function (event) {
            event.preventDefault();
            
            const resourceType = document.querySelector('#resource-type').value;
            const quantity = document.querySelector('#resource-quantity').value;
            const deliveryDate = document.querySelector('#delivery-date').value;
            
            if (resourceType && quantity && deliveryDate) {
                alert('Resources successfully allocated');
                resourceForm.reset();
            } else {
                alert('Please fill out all fields');
            }
        });
    } else {
        console.error('Resource Allocation Form or Submit Button not found.');
    }

    // Mission Details Form Submission
    const missionForm = document.querySelector('#mission-details-form');
    const missionButton = missionForm.querySelector('button[type="submit"]');
    
    if (missionForm && missionButton) {
        missionButton.addEventListener('click', function (event) {
            event.preventDefault();
            
            const missionName = document.querySelector('#mission-name').value;
            const missionObjective = document.querySelector('#mission-objective').value;
            const missionDate = document.querySelector('#mission-date').value;
            
            if (missionName && missionObjective && missionDate) {
                alert('Mission details submitted');
                missionForm.reset();
            } else {
                alert('Please fill out all fields');
            }
        });
    } else {
        console.error('Mission Details Form or Submit Button not found.');
    }
});
