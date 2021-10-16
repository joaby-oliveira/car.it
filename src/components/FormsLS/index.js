import { Title } from '../Title';
import styles from './styles.module.scss';
import FormsImage from '../FormsImage';
import Logo from '../Logo';

export const FormsLS = ({ title, subtitle }) => {
  return (
    <div animationType="leftToRight" className={`${styles.formsLS} flex column mainCenter crossCenter`}>
      <Logo className={`${styles.logoForms}`} white={true} />
      <Title white={true}>{title}</Title>
      <p className={`${styles.formsSubtitle}`}>{subtitle}</p>
      <FormsImage />
    </div>
  )
}
