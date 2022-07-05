import {useState} from 'react';
import './employees-add-form.css';

const EmployeesAddForm = (props) => {

    const [name,setName] = useState('')
    const [salary,setSalary] = useState('')

    const onNameChange = (e) =>{
        setName(e.target.value)
    }
    const onSalaryChange = (e) =>{
        setSalary(e.target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(name.length < 3 || !salary ) return;
        props.onSubmit(name, salary)
        setName('');
        setSalary('');
    }

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={onNameChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={onSalaryChange} />
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }


export default EmployeesAddForm;