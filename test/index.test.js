import test from 'ava';
import sinon from 'sinon';
import n from '../src/index';

const spy = sinon.spy();
test.beforeEach(() => {
  spy.resetHistory();
});

test('times calls fuction correct number of times', t => {
  n(5).times(spy);
  t.is(spy.callCount, 5);
});

test('times is passed the current index', t => {
  n(5).times(spy);
  const callValues = spy.getCalls().map(c => c.args[0]);
  t.deepEqual(callValues, [0, 1, 2, 3, 4]);
});

test('downTo throws when the number is higher than the start', t => {
  t.throws(() => n(1).downTo(10), 'floor must be less than the initial number');
});

test('downTo calls fuction correct number of times', t => {
  n(5).downTo(1)(spy);
  t.is(spy.callCount, 5);
});

test('downTo is passed the current index', t => {
  n(5).downTo(1)(spy);
  const callValues = spy.getCalls().map(c => c.args[0]);
  t.deepEqual(callValues, [5, 4, 3, 2, 1]);
});

test('upTo throws when the number is lower than the start', t => {
  t.throws(() => n(1).upTo(-1), 'ceil must be greater than the initial number');
});

test('upTo calls fuction correct number of times', t => {
  n(1).upTo(5)(spy);
  t.is(spy.callCount, 5);
});

test('upTo is passed the current index', t => {
  n(1).upTo(5)(spy);
  const callValues = spy.getCalls().map(c => c.args[0]);
  t.deepEqual(callValues, [1, 2, 3, 4, 5]);
});
