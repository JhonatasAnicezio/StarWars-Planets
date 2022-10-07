import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Button from './Button';
import Input from './Input';
import Select from './Select';
import './ListFilters.css';

function ListFilters() {
  const { setColumn, setComparison, setValue,
  } = useContext(PlanetsContext);
  const columnArr = ['population', 'orbital_period',
    'diameter','rotation_period', 'surface_water'];
  const operatorArr = [ 'maior que', 'menor que', 'igual a'];

  return (
    <div className='container-filter'>
      <Select
        text='Coluna'
        name='column'
        options={ columnArr }
        func={ setColumn }
      />
      <Select
        text='Operador'
        name='operator'
        options={ operatorArr }
        func={ setComparison }
      />
      <Input
        className='input-Number'
        type='text'
        name='filterNumber'
        func={ setValue }
      />
      <Button />
    </div>
  );
}

export default ListFilters;