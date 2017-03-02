/**
 * Created by yuan on 3/1/2017.
 */
const MAKEDOC_VALUE = '# Box Project Weekly Summary' +
  '\n' +
  '\n' +
  '## 1.Last two weeks’ Achievements' +
  '\n' +
  '* your content' +
  '\n' +
  '\n' +
  '## 2.Next two Weeks’ Actions' +
  '\n' +
  '* your content' +
  '\n' +
  '\n' +
  '## 3.Key Issues and Blockers' +
  '\n' +
  '* your content' +
  '\n' +
  '\n' +
  '## 4.Help Required' +
  '\n' +
  '* your content' +
  '\n' +
  '\n' +
  '\n' +
  '# Smart Operation' +
  '\n' +
  '\n' +
  '## 1.Last two weeks’ Failure' +
  '\n' +
  '* your content' +
  '\n' +
  '\n' +
  '## 2.Root cause of the failure' +
  '\n' +
  '* your content' +
  '\n' +
  '\n' +
  '## 3.Key Issues and Blockers' +
  '\n' +
  '* your content' +
  '\n' +
  '\n' +
  '## 4.Help Required' +
  '\n' +
  '* your content' +
  '\n' +
  '\n'

const DEFAULT_USER = [{
  value: 'labelnet',
  label: 'LABELNET1'
}, {
  value: 'labelnet2',
  label: 'LABELNET2'
}, {
  value: 'labelnet3',
  label: 'LABELNET3'
}]

const DEFAULT_USER_FILTER = [{
  value: null,
  label: 'All User'
}, {
  value: 'labelnet',
  label: 'LABELNET1'
}, {
  value: 'labelnet2',
  label: 'LABELNET2'
}, {
  value: 'labelnet3',
  label: 'LABELNET3'
}]

export default {
  MAKEDOC_VALUE,
  DEFAULT_USER,
  DEFAULT_USER_FILTER
}
