export class WorkshopModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            // name: new fields.StringField({ required: true }),
            description: new fields.SchemaField({
                long: new fields.HTMLField({
                    required: false,
                    blank: true,
                }),
                short: new fields.HTMLField({
                    required: false,
                    blank: true,
                }),
            }),
            img: new fields.FilePathField({
                required: false,
                categories: ["IMAGE"],
            }),
        };
    }

    prepareDerivedData() {}
}
