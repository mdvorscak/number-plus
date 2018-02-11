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

test('even positive', t => {
  t.true(n(2).even());
});

test('even negative', t => {
  t.false(n(1).even());
});

test('0 is even', t => {
  t.true(n(0).even());
});

test('odd postitive', t => {
  t.true(n(1).odd());
});

test('odd negative', t => {
  t.false(n(2).odd());
});

test('next single', t => {
  t.is(42, n(41).next());
});

test('next multiple', t => {
  const number = n(41);
  number.next();
  t.is(43, number.next());
});

test('prev single', t => {
  t.is(41, n(42).prev());
});

test('prev multiple', t => {
  const number = n(42);
  number.prev();
  t.is(40, number.prev());
});
