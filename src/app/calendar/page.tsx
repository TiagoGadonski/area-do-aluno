// pages/calendar.js
"use client"
import MyFullCalendar from './MyCalendar';
import { ContainerImagem, ContainerNav, GlobalStyle } from '../dashboard/style';
import MenuNav from '@/Components/Menu/Menu';
import styles from '../styles/Calendar.module.css';

export default function CalendarPage() {
    return (
        <>
    <GlobalStyle />
      <ContainerNav>
        <MenuNav></MenuNav>
      </ContainerNav>

      
            <h1>Calendário de atividades</h1>
        <div className={styles.container}>
            <MyFullCalendar />
        </div>
        
        </>
    );
}
