(function() {
  $(function() {
    describe("toBeEmpty", function() {
      it('should work for arrays', function() {
        expect([]).toBeEmpty();
        return expect([1]).not.toBeEmpty();
      });
      if (typeof Backbone !== "undefined" && Backbone !== null) {
        return it('should work for backbone collections', function() {
          var c;
          c = new Backbone.Collection();
          expect(c).toBeEmpty();
          c.add({
            foo: 'bar'
          });
          return expect(c).not.toBeEmpty();
        });
      }
    });
    describe("toInclude", function() {
      it('should work for arrays', function() {
        expect([]).not.toInclude('s');
        expect(['s', 'n', 'a', 'f', 'u']).toInclude('f', 'a', 'n');
        expect(['s', 'n', 'a', 'f', 'u']).not.toInclude('p', 'a', 'n');
        return expect(['s', 'n', 'a', 'f', 'u']).not.toInclude('f', 'a', 'x');
      });
      if (typeof Backbone !== "undefined" && Backbone !== null) {
        return it('should work for backbone collections', function() {
          var a, c, f, n, p, s, u, x, _ref;
          c = new Backbone.Collection();
          _ref = [new Backbone.Model(), new Backbone.Model(), new Backbone.Model(), new Backbone.Model(), new Backbone.Model(), new Backbone.Model(), new Backbone.Model()], s = _ref[0], n = _ref[1], a = _ref[2], f = _ref[3], u = _ref[4], p = _ref[5], x = _ref[6];
          expect(c).not.toInclude(s);
          c.add([s, n, a, f, u]);
          expect(c).toInclude(f, a, n);
          expect(c).not.toInclude(p, a, n);
          return expect(c).not.toInclude(f, a, x);
        });
      }
    });
    return describe("toIncludeAny", function() {
      it('should work for arrays', function() {
        expect([]).not.toIncludeAny('s');
        expect(['s', 'n', 'a', 'f', 'u']).toIncludeAny('f', 'a', 'n');
        expect(['s', 'n', 'a', 'f', 'u']).toIncludeAny('p', 'a', 'n');
        expect(['s', 'n', 'a', 'f', 'u']).toIncludeAny('f', 'a', 'x');
        return expect(['s', 'n', 'a', 'f', 'u']).not.toIncludeAny('p', 'x');
      });
      if (typeof Backbone !== "undefined" && Backbone !== null) {
        return it('should work for backbone collections', function() {
          var a, c, f, n, p, s, u, x, _ref;
          c = new Backbone.Collection();
          _ref = [new Backbone.Model(), new Backbone.Model(), new Backbone.Model(), new Backbone.Model(), new Backbone.Model(), new Backbone.Model(), new Backbone.Model()], s = _ref[0], n = _ref[1], a = _ref[2], f = _ref[3], u = _ref[4], p = _ref[5], x = _ref[6];
          expect(c).not.toIncludeAny(s);
          c.add([s, n, a, f, u]);
          expect(c).toIncludeAny(f, a, n);
          expect(c).toIncludeAny(p, a, n);
          expect(c).toIncludeAny(f, a, x);
          return expect(c).not.toIncludeAny(p, x);
        });
      }
    });
  });
}).call(this);
