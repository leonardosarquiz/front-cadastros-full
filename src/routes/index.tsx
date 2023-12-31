import {Routes, Route, Navigate} from 'react-router-dom'
import {Button} from '@mui/material';
import { useAppThemeContext } from '../shared/contexts/ThemeContext';

export function AppRoutes() {
  const {toggleTheme} = useAppThemeContext()
  return (
   

    <Routes>
      <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleTheme}>Teste</Button>} />



      <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
    </Routes>
  )
}