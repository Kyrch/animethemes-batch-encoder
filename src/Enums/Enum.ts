abstract class Enum {
    static cases(): Array<Enum> {
        return Object.values(this);
    }
};

export default Enum;