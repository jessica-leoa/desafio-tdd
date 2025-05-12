const Queue = require('./queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue(); 
  });

  it('Deve criar uma fila vazia', () => {
    expect(queue).toEqual({ elements: [] });
  });

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    expect(queue.size()).toBe(0); 
    queue.elements = [1, 2, 3]; 
    expect(queue.size()).toBe(3);
  });

  it('Deve ser capaz de adicionar um item na fila', () => {
    queue.add('item1');
    expect(queue.elements).toEqual(['item1']);
    queue.add('item2');
    expect(queue.elements).toEqual(['item1', 'item2']);
  });

  it('Deve escolher o primeiro item da fila (peek)', () => {
    queue.add('item1');
    queue.add('item2');
    expect(queue.peek()).toBe('item1'); 
    expect(queue.size()).toBe(2); 
  });

  it('Deve remover o primeiro item da fila (dequeue)', () => {
    queue.add('item1');
    queue.add('item2');
    expect(queue.dequeue()).toBe('item1'); 
    expect(queue.elements).toEqual(['item2']); 
  });

  it('Deve retornar undefined se dequeue() for chamado em fila vazia', () => {
    expect(queue.dequeue()).toBeUndefined();
  });
});