import 'react-day-picker/lib/style.css';
import React, { useCallback, useState } from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';

import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextAppointment,
  Section,
  Appointment,
} from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const appointments = [
  {
    id: '1',
    url: 'https://avatars.githubusercontent.com/u/52974388?v=4',
    name: 'Anderson Silva',
    time: '08:00',
  },
  {
    id: '2',
    url: 'https://avatars.githubusercontent.com/u/52974388?v=4',
    name: 'Anderson Silva',
    time: '09:00',
  },
  {
    id: '3',
    url: 'https://avatars.githubusercontent.com/u/52974388?v=4',
    name: 'Anderson Silva',
    time: '10:00',
  },
];

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { signOut } = useAuth();

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Gobarber" />
          <Profile>
            <img
              src="https://avatars.githubusercontent.com/u/52974388?v=4"
              alt="Anderson Silva"
            />
            <div>
              <span>Bem-vindo,</span>
              <strong>Anderson Silva</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/52974388?v=4"
                alt="Anderson Silva"
              />
              <strong>Anderson Silva</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>
            {appointments.map(appointment => (
              <Appointment key={appointment.id}>
                <span>
                  <FiClock />
                  {appointment.time}
                </span>
                <div>
                  <img src={appointment.url} alt={appointment.name} />
                  <strong>{appointment.name}</strong>
                </div>
              </Appointment>
            ))}
          </Section>
          <Section>
            <strong>Tarde</strong>
            {appointments.map(appointment => (
              <Appointment key={appointment.id}>
                <span>
                  <FiClock />
                  {appointment.time}
                </span>
                <div>
                  <img src={appointment.url} alt={appointment.name} />
                  <strong>{appointment.name}</strong>
                </div>
              </Appointment>
            ))}
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            selectedDays={selectedDate}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            onDayClick={handleDateChange}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
