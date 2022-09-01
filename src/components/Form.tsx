import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormTitle from "./FormTitle";
import CustomSwitcher from "./CustomSwitcher";
import CustomSelect from "./CustomSelect";
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import CloseIcon from '@mui/icons-material/Close';
import TransitionAlerts from "./TransitionAlerts";

interface IOrderForm {
  firstName: string,
  lastName: string,
  email: string,
  productType: number,
  feature100: number,
  feature200: number,
  comment: string,
  totalPrice: number
}

interface IFormProps {
  handleClose: () => void
}

const Form: React.FC<IFormProps> = ({handleClose}) => {

  const productTypes = [
    {
      value: 50,
      label: 'Product $50'
    },
    {
      value: 100,
      label: 'Product $100'
    },
    {
      value: 300,
      label: 'Product $300'
    },
  ]

  const [productPrice, setProductPrice] = useState(0)
  const [featurePrice, setFeaturePrice] = useState(0)
  const totalPrice = productPrice + featurePrice

  const orderValidationSchema = yup.object().shape({
    firstName: yup
      .string()
      .trim()
      .required('Please fill in first name.')
      .matches(/^[а-яА-ЯёЁa-zA-Z\s]+$/, 'Please enter a valid first name.'),
    lastName: yup
      .string()
      .trim()
      .required('Please fill in last name.')
      .matches(/^[а-яА-ЯёЁa-zA-Z\s]+$/, 'Please enter a valid last name.'),
    email: yup
      .string()
      .email('Please enter a valid email address.')
      .required('Please fill in email.'),
    productType: yup
      .string()
      .required('Please select product type.'),
  })

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    productType: 0,
    feature100: 0,
    feature200: 0,
    comment: '',
    totalPrice: 0
  };

  const methods = useForm<IOrderForm>({
    mode: 'all',
    resolver: yupResolver(orderValidationSchema),

  })

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = methods;

  const onSubmit = handleSubmit((data) => {
    const order = {...data, totalPrice};
    console.log(order);
    reset();
    // handleClose()
    setOpenAlert(true)
  })

  const [openAlert, setOpenAlert] = useState(false);
  const alertMessage = `The order for the amount of $${totalPrice} has been successfully formed`
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <CloseIcon className='close-btn' onClick={handleClose}/>

        <FormTitle
          variant='h4'
          title='Place an order'
        />

        <TextField
          label="First Name*"
          className={errors?.firstName && 'error-field'}
          error={!!errors?.firstName}
          autoComplete='off'
          {...register('firstName')}
        />
        {errors?.firstName &&
		  <Typography className='form-error-message'>{errors?.firstName.message || 'Error'}</Typography>}


        <TextField
          label="Last Name*"
          className={errors?.lastName && 'error-field'}
          error={!!errors?.lastName}
          {...register('lastName')}
          autoComplete='off'
        />
        {errors?.lastName &&
		  <Typography className='form-error-message'>{errors?.lastName.message || 'Error'}</Typography>}

        <TextField
          label="user@gmail.com*"
          className={errors?.email && 'error-field'}
          error={!!errors?.email}
          autoComplete='off'
          {...register('email')}
        />
        {errors?.email && <Typography className='form-error-message'>{errors?.email.message || 'Error'}</Typography>}

        <CustomSelect
          className='product-type'
          title='Product type*'
          titleWidth={100}
          selectLabel='Select product type'
          selectWidth={200}
          menuItems={productTypes}
          name='productType'
          productPrice={productPrice}
          setProductPrice={setProductPrice}
          error={errors?.productType && errors?.productType.message}
        />

        <div>
          <CustomSwitcher
            className='feature'
            label='Additional feature for 100$'
            name='feature100'
            value={100}
            setFeaturePrice={setFeaturePrice}
          />
          <CustomSwitcher
            className='feature'
            label='Additional feature for 200$'
            name='feature200'
            value={200}
            setFeaturePrice={setFeaturePrice}
          />
        </div>

        <TextField
          label='Type your comment'
          multiline
          rows={3}
          {...register('comment')}
        ></TextField>

        <div className='total-price'>
          <Typography>Total price</Typography>
          <Typography>${totalPrice}</Typography>
        </div>

        <Button
          className='submit-button'
          type='submit'
          variant="contained"
        >
          Send form
        </Button>
      </form>
      <TransitionAlerts
        open={openAlert}
        setOpenAlert={setOpenAlert}
        text={alertMessage}
      />
    </FormProvider>

  );
};

export default Form;