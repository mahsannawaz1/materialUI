
import './App.css'
import MuiButton from './components/MuiButton'
import MuiCheckBox from './components/MuiCheckBox'
import MuiRadioButton from './components/MuiRadioButton'
import MuiRating from './components/MuiRating'
import MuiSelect from './components/MuiSelect'
import MuiText from './components/MuiText'
import MuiTypography from './components/MuiTypography'

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiText />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckBox />
      <MuiRating />
    </div>
  )
}

export default App
