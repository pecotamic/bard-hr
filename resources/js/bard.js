import HR from './HR'
import HRButton from './HRButton'

Statamic.$bard.extend(({ mark }) => mark(new HR()))
Statamic.$bard.buttons((buttons) => {
  buttons.append({
    name: 'hr',
    text: 'Horizontal Ruler',
    command: 'hr',
    args: {},
    html: '<i class="fa fa-minus"></i>',
    component: HRButton,
  })
})
