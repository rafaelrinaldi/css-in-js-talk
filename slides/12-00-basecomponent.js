import { PureComponent } from './BaseComponent'

export default class Title extends PureComponent {
  template (css) {
    return <h1 className={css('title')}>Title</h1>
  }

  styles () {
    return {
      title: { color: 'fuchsia' }
    }
  }
}
