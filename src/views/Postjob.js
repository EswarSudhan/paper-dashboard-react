import React, { useState } from 'react';
import { Button, TextareaAutosize, TextField, Grid, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';

import axios from 'axios';

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyDescription: '',
    CGPA_Required: '',
    CTC: '',
    serviceAgreement: '',
    trainingPeriodandStipend: '',
    workLocation: '',
    evalationProcess: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.post('YOUR_API_ENDPOINT', formData);
      console.log('Post API Response:', response.data);
      // Show success message or perform additional actions on successful save
    } catch (error) {
      console.error('Error saving data:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className='content'>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Company Name"
            fullWidth
            variant="outlined"
            size="larger"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            label="CTC"
            fullWidth
            variant="outlined"
            size="large"
            name="CTC"
            value={formData.CTC}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={11}>
          <TextField
            label="Company Description"
            fullWidth
            multiline
            rows={10}
            variant="outlined"
            size="large"
            name="companyDescription"
            value={formData.companyDescription}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            label="CGPA Required"
            fullWidth
            variant="outlined"
            size="large"
            type="number"
            step="0.01"
            name="CGPA_Required"
            value={formData.CGPA_Required}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Service Agreement"
            fullWidth
            variant="outlined"
            size="large"
            name="serviceAgreement"
            value={formData.serviceAgreement}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}  md={2}>
        <TextField
            label="10th mark"
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            size="large"
            name="companyDescription"
            value={formData.companyDescription}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            label="12th mark"
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            size="large"
            name="workLocation"
            value={formData.workLocation}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}  md={2}>
        <TextField
            label="Max current arrears"
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            size="large"
            name="companyDescription"
            value={formData.companyDescription}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            label="Max history arrears"
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            size="large"
            name="workLocation"
            value={formData.workLocation}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label=""
            fullWidth
           rows={2}
            
          variant="outlined"
          size="large"
          type="date" // Set the type to "date" for a date field
          name="workLocation"
          value={formData.workLocation}
          onChange={handleChange}
          />
        </Grid>
        <Grid item xs={11}>
        <TextField
            label="Evaluation process"
            fullWidth
            multiline
            rows={5}
            variant="outlined"
            size="large"
            name="companyDescription"
            value={formData.companyDescription}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}  md={6}>
        <TextField
            label="Training and Stipend"
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            size="large"
            name="companyDescription"
            value={formData.companyDescription}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            label="Work Location"
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            size="large"
            name="workLocation"
            value={formData.workLocation}
            onChange={handleChange}
          />
          </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CompanyForm;
