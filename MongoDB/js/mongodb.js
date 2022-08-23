// use 数据库名 : 切换数据库，不存在就创建并切换
use study; // switched to db study

// 查看帮助
help
db.help();

// 查询使用数据库
show dbs; // 方式1
show databases; // 方式2

// 查询当前使用的数据库
db // 方式1 study
db.getName(); // 方式2

// 查询当前数据库的状态
db.stats();

// 查询当前数据库的版本
db.version();

// 查询当前数据库的连接机器的地址
db.getMongo();

// 创建数据库
// use 数据库名;

// 删除数据库
db.dropDatabase(); // { "ok" : 1 }

// 创建集合
db.createCollection("name"); // name : 数据库名称 // { "ok" : 1 }

// 获取数据库中指定集合名
db.getCollection('stus'); // study.stus

// 获取数据库中所有集合名
db.getCollectionNames(); // ['stu']

// 获取数据库中所有集合的状态
db.printCollectionStats();

// 查询当前数据中的所有表
show collections

// 删除集合
db.name.drop(); // name : 数据库名称 // true

// 向集合中插入单个数据,如果集合不存在就隐式创建该集合
// db.集合名.insert(document / array) // 方式1 document(文档) 或 array(数组)
// db.集合名.save(document / array) // 方式2
db.stus.insert({ 'name': 'dudu', 'age': 1, 'sex': 'male' }) // WriteResult({ "nInserted" : 1 })

// 批量插入
// db.集合名.insertsMany([document1, document2, ..,])
db.stus.insertMany([
    { 'name': 'keke', 'age': NumberInt(2), 'sex': 'male' },
    { 'name': 'hehe', 'age': NumberInt(3), 'sex': 'female' }
])
for (let index = 0; index < 3; index++) {
    db.stus.insert({ 'name': 'test' + index, 'age': 10 + index, 'sex': 'male' });
}

// 查询文档数据
db.stus.find();

// 条件查找
db.stus.find({ name: 'keke' }) // 查询name值为keke的数据
db.stus.findOne({ sex: 'male' }) // 查询sex值为male的第一条数据
db.stus.find(null, { name: 1, _id: 0 }); // 字段显示某个字段
db.stus.distinct('sex'); // 查询去重后的字段

// db.集合名.update(query, update, opetions)
db.stus.find({ _id: ObjectId('630393720897c1c316b058bb') });
// 文档更新(覆盖更新,其他字段会没有值null)
db.stus.update({ _id: ObjectId('630393720897c1c316b058bb') }, { sex: 'female' }); // WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

// 文件更新($set: 修改更新,其他字段不会变)
db.stus.update({ _id: ObjectId('630393720897c1c316b058bb') }, { $set: { age: 13 } });

// 文件更新(全部更新) $inc: 在原列值上进行操作 multi : 是否修改全部符合条件的数据，默认false
db.stus.update({ sex: 'female' }, { $inc: { age: 1 } }, { multi: true }); // WriteResult({ "nMatched" : 2, "nUpserted" : 0, "nModified" : 2 })

// 删除文档数据 : db.集合名.remove({/ ... /})
db.stus.remove({ name: null }); // WriteResult({ "nRemoved" : 1 })

// 文档统计查询 : db.集合名.count(query, options)
db.stus.count(); // 统计comment集合的所有记录条数
db.stus.count({ sex: 'male' });

// 文档分页查询 : db.集合名.find().limit(number).skip(number)
db.stus.find().limit(2); // 查询前number条数据,默认值20
db.stus.find().skip(2); // 查询跳过number条数据的的数据,默认值0
db.stus.find().limit(2).skip(2); // 结合使用

// 文档排序查询 : db.集合名.find().sort({ field: number,... })
db.stus.find().sort({ _id: 1 }); // 1 为升序
db.stus.find().sort({ _id: -1 }); // -1 为降序
db.stus.find().sort({ sex: -1, age: -1 }); // 当第一个字段相同时,按照第二个字段进行排序
// skip()，limit()，sort()三个方法在一起执行时，执行顺序为 sort() -> skip() -> limit()

// 正则查询 : db.集合名.find({ field: /正则/ })
db.stus.find({ name: /^test/ });

// 比较查询 : db.集合名.find({ field: { 比较操作符: value } })
db.stus.find({ age: { $gt: 10 } });    // $gt 大于
db.stus.find({ age: { $lt: 10 } });    // $lt 小于
db.stus.find({ age: { $gte: 10 } });   // $gte 大于等于
db.stus.find({ age: { $lte: 10 } });   // $lte 小于等于
db.stus.find({ age: { $ne: 10 } });    // $ne 不等于

// 模糊查询 : db.集合名.find({ field: { 操作符: [value, ...] } })
db.stus.find({ name: { $in: ['dudu', 'keke'] } });    // $in 包含
db.stus.find({ name: { $nin: ['dudu', 'keke'] } });   // $nin 不包含

// 条件查询 $and(并且) $or(或者)
db.stus.find({ $and: [{ age: { $gt: 2 } }, { age: { $lt: 11 } }] }); // $and: [{}, {}, ...]
db.stus.find({ $or: [{ age: { $gt: 10 } }, { sex: 'female' }] }); // $or: [{}, {}, ...]

// 查询索引 : db.集合名.getIndexes();
db.stus.getIndexes();

// 创建索引 : db.集合名.createIndex(keys, options)
db.stus.createIndex({ age: 1 });

// 删除索引 : db.集合名.dropIndex(index);
db.stus.dropIndex({ age: 1 }); // 方式1
db.stus.dropIndex('age_1');    // 方式2

// 删除全部索引(_id除外) : db.集合名.dropIndexs();
db.stus.dropIndexes();

// 执行计划 db.集合名.find().explain(options);
db.stus.find().explain();

// 涵盖查询
db.stus.find({ _id: ObjectId("63048d0167fe9e18f068e1c0") }, { _id: 1 });