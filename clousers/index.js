// clouser

const y = 'hola';
const x = 'a todos';

const auditProps = {
    createAt: { default: new Date() },
    updateAt: { default: new Date() },
    createBy: { type: Schema.Types.Object.id, ref: 'User' },
    updateBy: { type: Schema.Types.Object.id, ref: 'User' }
}

const model = (defaultProps) => {
    return (name, props) => {
        const schema = moongose.Schema({
            ...defaultProps,
            ...props
        })
        return moongose.model(name, schema);
    }
}

export const withAudit = model();

const f = () => {
    const x = 'mundo';
    console.log(x, y);
}

const g = (valor) => {
    return () => { console.log(valor) }
}



console.log(y);
console.log(x);




g('Hola mundo');

f();